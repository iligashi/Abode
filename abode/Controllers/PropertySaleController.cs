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
    public class PropertySaleController : ControllerBase
    {
        private readonly PropertySaleDbContext _context;

        public PropertySaleController(PropertySaleDbContext context)
        {
            _context = context;
        }

        // GET: api/PropertySale
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PropertySale>>> GetProperties()
        {
            return await _context.Sale.ToListAsync();
        }

        // GET: api/PropertySale/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PropertySale>> GetProperty(int id)
        {
            var propertySale = await _context.Sale.FindAsync(id);

            if (propertySale == null)
            {
                return NotFound();
            }

            return propertySale;
        }

        // POST: api/PropertySale
        [HttpPost]
        public async Task<ActionResult<PropertySale>> PostProperty(PropertySale property)
        {
            _context.Sale.Add(property);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProperty), new { id = property.SaleID }, property);
        }

        // PUT: api/PropertySale/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProperty(int id, PropertySale property)
        {
            if (id != property.SaleID)
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

        // DELETE: api/PropertySale/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProperty(int id)
        {
            var property = await _context.Sale.FindAsync(id);
            if (property == null)
            {
                return NotFound();
            }

            _context.Sale.Remove(property);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PropertyExists(int id)
        {
            return _context.Sale.Any(e => e.SaleID == id);
        }
    }
}
