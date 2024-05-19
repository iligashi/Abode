using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;

[ApiController]
[Route("api/[controller]")]
public class UserAccontController : ControllerBase
{
    private readonly UserAccountDbContext _context;

    public UserAccontController(UserAccountDbContext context)
    {
        _context = context;
    }

    // GET: api/Users
    [HttpGet]
    public async Task<ActionResult<IEnumerable<UserAccontController>>> GetUserAccount()
    {
        return await _context.UserAccount.ToListAsync();
    }

    // GET: api/Users/5
    [HttpGet("{id}")]
    public async Task<ActionResult<UserAccount>> GetUserAccount(int id)
    {
        var UserAccount = await _context.UserAccount.FindAsync(id);

        if (UserAccount == null)
        {
            return NotFound();
        }

        return UserAccount;
    }

    // POST: api/Users
    [HttpPost]
    public async Task<ActionResult<UserAccount>> PostUserRegistration(UserAccount UserAccount)
    {
        _context.UserAccount.Add(UserAccount);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetUserAccount), new { id = UserAccount.UserAccountId }, UserAccount);
    }

    // PUT: api/Users/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutUserAccount(int id, UserAccount UserAccount)
    {
        if (id != UserAccount.UserAccountId)
        {
            return BadRequest();
        }

        _context.Entry(UserAccount).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!UserAccountExists(id))
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
    public async Task<IActionResult> DeleteUserAccount(int id)
    {
        var UserAccount = await _context.UserAccount.FindAsync(id);
        if (UserAccount == null)
        {
            return NotFound();
        }

        _context.UserAccount.Remove(UserAccount);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool UserAccountExists(int id)
    {
        return _context.UserAccount.Any(e => e.UserAccountId == id);
    }
}
