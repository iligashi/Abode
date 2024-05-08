using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;


    [ApiController]
    [Route("api/[controller]")]
    public class CommercialListingsController : ControllerBase
    {
        private readonly YourNamespace.ApplicationDbContext.CommercialListingDbContext _context;

        public CommercialListingsController(YourNamespace.ApplicationDbContext.CommercialListingDbContext context)
        {
            _context = context;
        }

        // GET: api/CommercialListings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CommercialListing>>> GetCommercialListings()
        {
            return await _context.CommercialListings.ToListAsync();
        }

        // GET: api/CommercialListings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CommercialListing>> GetCommercialListing(int id)
        {
            var commercialListing = await _context.CommercialListings.FindAsync(id);

            if (commercialListing == null)
            {
                return NotFound();
            }

            return commercialListing;
        }

        // POST: api/CommercialListings
        [HttpPost]
        public async Task<ActionResult<CommercialListing>> PostCommercialListing(CommercialListing commercialListing)
        {
            _context.CommercialListings.Add(commercialListing);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCommercialListing), new { id = commercialListing.ListingID }, commercialListing);
        }

        // PUT: api/CommercialListings/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCommercialListing(int id, CommercialListing commercialListing)
        {
            if (id != commercialListing.ListingID)
            {
                return BadRequest();
            }

            _context.Entry(commercialListing).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommercialListingExists(id))
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

        // DELETE: api/CommercialListings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCommercialListing(int id)
        {
            var commercialListing = await _context.CommercialListings.FindAsync(id);
            if (commercialListing == null)
            {
                return NotFound();
            }

            _context.CommercialListings.Remove(commercialListing);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CommercialListingExists(int id)
        {
            return _context.CommercialListings.Any(e => e.ListingID == id);
        }
    }


