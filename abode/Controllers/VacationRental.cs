using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;

[ApiController]
[Route("api/[controller]")]
public class VacationRentalController : ControllerBase
{
    private readonly VacationRentalDbContext _context;

    public VacationRentalController(VacationRentalDbContext context)
    {
        _context = context;
    }

    // GET: api/VacationRental
    [HttpGet]
    public async Task<ActionResult<IEnumerable<VacationRental>>> GetVacationRentals()
    {
        return await _context.VacationRentals.ToListAsync();
    }

    // GET: api/VacationRental/5
    [HttpGet("{id}")]
    public async Task<ActionResult<VacationRental>> GetVacationRental(int id)
    {
        var vacationRental = await _context.VacationRentals.FindAsync(id);

        if (vacationRental == null)
        {
            return NotFound();
        }

        return vacationRental;
    }

    // POST: api/VacationRental
    [HttpPost]
    public async Task<ActionResult<VacationRental>> PostVacationRental(VacationRental vacationRental)
    {
        _context.VacationRentals.Add(vacationRental);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetVacationRental), new { id = vacationRental.ListingID }, vacationRental);
    }

    // PUT: api/VacationRental/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutVacationRental(int id, VacationRental vacationRental)
    {
        if (id != vacationRental.ListingID)
        {
            return BadRequest();
        }

        _context.Entry(vacationRental).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!VacationRentalExists(id))
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

    // DELETE: api/VacationRental/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteVacationRental(int id)
    {
        var vacationRental = await _context.VacationRentals.FindAsync(id);
        if (vacationRental == null)
        {
            return NotFound();
        }

        _context.VacationRentals.Remove(vacationRental);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool VacationRentalExists(int id)
    {
        return _context.VacationRentals.Any(e => e.ListingID == id);
    }
}
