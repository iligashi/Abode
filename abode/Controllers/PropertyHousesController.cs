using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PropertyHousesController : ControllerBase
    {
        private readonly PropertyHousesDbContext _context;

        public PropertyHousesController(PropertyHousesDbContext context)
        {
            _context = context;
        }

        // GET: api/PropertyHouses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PropertyHouses>>> GetProperties()
        {
            return await _context.Houses.ToListAsync();
        }

        // GET: api/PropertyHouses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PropertyHouses>> GetProperty(int id)
        {
            var propertyHouses = await _context.Houses.FindAsync(id);

            if (propertyHouses == null)
            {
                return NotFound();
            }

            return propertyHouses;
        }

        // POST: api/PropertyHouses
        [HttpPost]
        public async Task<ActionResult<PropertyHouses>> PostProperty(PropertyHouses property)
        {
            _context.Houses.Add(property);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProperty), new { id = property.HousesID }, property);
        }

        // PUT: api/PropertyHouses/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProperty(int id, PropertyHouses property)
        {
            if (id != property.HousesID)
            {
                return BadRequest();
            }

            _context.Entry(property).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PropertyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/PropertyHouses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProperty(int id)
        {
            var property = await _context.Houses.FindAsync(id);
            if (property == null)
            {
                return NotFound();
            }

            _context.Houses.Remove(property);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // POST: api/PropertyHouses/5/upload-photo
        [HttpPost("{id}/upload-photo")]
        public async Task<IActionResult> UploadPhoto(int id, IFormFile photo)
        {
            var propertyHouses = await _context.Houses.FindAsync(id);
            if (propertyHouses == null)
            {
                return NotFound();
            }

            using (var memoryStream = new MemoryStream())
            {
                await photo.CopyToAsync(memoryStream);
                propertyHouses.Photos = memoryStream.ToArray();
            }

            _context.Houses.Update(propertyHouses);
            await _context.SaveChangesAsync();

            return Ok(propertyHouses);
        }

        // GET: api/PropertyHouses/5/photo
        [HttpGet("{id}/photo")]
        public async Task<IActionResult> GetPhoto(int id)
        {
            var propertyHouses = await _context.Houses.FindAsync(id);
            if (propertyHouses == null || propertyHouses.Photos == null)
            {
                return NotFound();
            }

            return File(propertyHouses.Photos, "image/jpeg");
        }

        private bool PropertyExists(int id)
        {
            return _context.Houses.Any(e => e.HousesID == id);
        }
    }
}
