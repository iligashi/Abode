using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;

[ApiController]
[Route("api/[controller]")]
public class UsersRegistrationController : ControllerBase
{
    private readonly UserRegistrationDbContext _context;

    public UsersRegistrationController(UserRegistrationDbContext context)
    {
        _context = context;
    }

    // GET: api/Users
    [HttpGet]
    public async Task<ActionResult<IEnumerable<UserRegistration>>> GetUserRegistration()
    {
        return await _context.UserRegistration.ToListAsync();
    }

    // GET: api/Users/5
    [HttpGet("{id}")]
    public async Task<ActionResult<UserRegistration>> GetUserRegistration(int id)
    {
        var user = await _context.UserRegistration.FindAsync(id);

        if (user == null)
        {
            return NotFound();
        }

        return user;
    }

    // POST: api/Users
    [HttpPost]
    public async Task<ActionResult<UserRegistration>> PostUser(UserRegistration user)
    {
        _context.UserRegistration.Add(user);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetUserRegistration), new { id = user.UserRegistrationId }, user);
    }

    // PUT: api/Users/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutUser(int id, UserRegistration user)
    {
        if (id != user.UserRegistrationId)
        {
            return BadRequest();
        }

        _context.Entry(user).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!UserExists(id))
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

    // DELETE: api/Users/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUserRegistration(int id)
    {
        var user = await _context.UserRegistration.FindAsync(id);
        if (user == null)
        {
            return NotFound();
        }

        _context.UserRegistration.Remove(user);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool UserExists(int id)
    {
        return _context.UserRegistration.Any(e => e.UserRegistrationId == id);
    }
}
