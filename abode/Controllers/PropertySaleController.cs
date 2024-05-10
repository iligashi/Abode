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
        public async Task<ActionResult<IEnumerable<PropertySale>>> GetSale()
        {
            return await _context.Sale.ToListAsync();
        }

        // GET: api/PropertySale/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PropertySale>> GetPropertySale(int id)
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
        public async Task<ActionResult<PropertySale>> PostPropertySale(PropertySale Sale)
        {
            _context.Sale.Add(Sale);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPropertySale), new { id = Sale.SaleID }, Sale);
        }

        // PUT: api/PropertySale/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPropertySale(int id, PropertySale Sale)
        {
            if (id != Sale.SaleID)
            {
                return BadRequest();
            }

            _context.Entry(Sale).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PropertySaleExists(id))
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
        public async Task<IActionResult> DeletePropertySale(int id)
        {
            var Sale = await _context.Sale.FindAsync(id);
            if (Sale == null)
            {
                return NotFound();
            }

            _context.Sale.Remove(Sale);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PropertySaleExists(int id)
        {
            return _context.Sale.Any(e => e.SaleID == id);
        }
    }
}
