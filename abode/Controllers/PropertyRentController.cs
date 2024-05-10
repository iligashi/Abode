using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PropertyRentController : ControllerBase
    {
        private readonly PropertyRentDbContext _context;

        public PropertyRentController(PropertyRentDbContext context)
        {
            _context = context;
        }

        // GET: api/PropertyRent
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PropertyRent>>> GetProperties()
        {
            return await _context.Rent.ToListAsync();
        }

        // GET: api/PropertyRent/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PropertyRent>> GetProperty(int id)
        {
            var propertyRent = await _context.Rent.FindAsync(id);

            if (propertyRent == null)
            {
                return NotFound();
            }

            return propertyRent;
        }

        // POST: api/PropertyRent
        [HttpPost]
        public async Task<ActionResult<PropertyRent>> PostProperty(PropertyRent property)
        {
            _context.Rent.Add(property);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProperty), new { id = property.RentID }, property);
        }

        // PUT: api/PropertyRent/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProperty(int id, PropertyRent property)
        {
            if (id != property.RentID)
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

        // DELETE: api/PropertyRent/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProperty(int id)
        {
            var property = await _context.Rent.FindAsync(id);
            if (property == null)
            {
                return NotFound();
            }

            _context.Rent.Remove(property);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PropertyExists(int id)
        {
            return _context.Rent.Any(e => e.RentID == id);
        }
    }
}
