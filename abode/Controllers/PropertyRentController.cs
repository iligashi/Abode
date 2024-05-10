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
        public async Task<ActionResult<IEnumerable<PropertyRent>>> GetRent()
        {
            return await _context.Rent.ToListAsync();
        }

        // GET: api/PropertyRent/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PropertyRent>> GetPropertyRent(int id)
        {
            var PropertyRent = await _context.Rent.FindAsync(id);

            if (PropertyRent == null)
            {
                return NotFound();
            }

            return PropertyRent;
        }

        // POST: api/PropertyRent
        [HttpPost]
        public async Task<ActionResult<PropertyRent>> PostPropertyRent(PropertyRent Rent)
        {
            _context.Rent.Add(Rent);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPropertyRent), new { id = Rent.RentID }, Rent);

        }

        // PUT: api/PropertyRent/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPropertyRent(int id, PropertyRent Rent)
        {
            if (id != Rent.RentID)
            {
                return BadRequest();
            }

            _context.Entry(Rent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PropertyRentExists(id))
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
        public async Task<IActionResult> DeletePropertyRent(int id)
        {
            var Rent = await _context.Rent.FindAsync(id);
            if (Rent == null)
            {
                return NotFound();
            }

            _context.Rent.Remove(Rent);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PropertyRentExists(int id)
        {
            return _context.Rent.Any(e => e.RentID == id);
        }
    }
}
