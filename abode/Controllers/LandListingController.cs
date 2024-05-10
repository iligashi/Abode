using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;

[ApiController]
[Route("api/[controller]")]
public class LandListingsController : ControllerBase
{
    private readonly LandListingDbContext _context;

    public LandListingsController(LandListingDbContext context)
    {
        _context = context;
    }

    // GET: api/LandListings
    [HttpGet]
    public async Task<ActionResult<IEnumerable<LandListing>>> GetLandListings()
    {
        return await _context.LandListings.ToListAsync();
    }

    // GET: api/LandListings/5
    [HttpGet("{id}")]
    public async Task<ActionResult<LandListing>> GetLandListing(int id)
    {
        var landListing = await _context.LandListings.FindAsync(id);

        if (landListing == null)
        {
            return NotFound();
        }

        return landListing;
    }

    // POST: api/LandListings
    [HttpPost]
    public async Task<ActionResult<LandListing>> PostLandListing(LandListing landListing)
    {
        _context.LandListings.Add(landListing);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetLandListing), new { id = landListing.ListingID }, landListing);
    }

    // PUT: api/LandListings/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutLandListing(int id, LandListing landListing)
    {
        if (id != landListing.ListingID)
        {
            return BadRequest();
        }

        _context.Entry(landListing).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!LandListingExists(id))
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

    // DELETE: api/LandListings/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteLandListing(int id)
    {
        var landListing = await _context.LandListings.FindAsync(id);
        if (landListing == null)
        {
            return NotFound();
        }

        _context.LandListings.Remove(landListing);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool LandListingExists(int id)
    {
        return _context.LandListings.Any(e => e.ListingID == id);
    }
}
