using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;

[ApiController]
[Route("api/[controller]")]
public class UserAccountController : ControllerBase
{
    private readonly UserAccountDbContext _context;

    public UserAccountController(UserAccountDbContext context)
    {
        _context = context;
    }

    // GET: api/UserAccount
    [HttpGet]
    public async Task<ActionResult<IEnumerable<UserAccount>>> GetUserAccounts()
    {
        return await _context.UserAccount.ToListAsync();
    }

    // GET: api/UserAccount/5
    [HttpGet("{id}")]
    public async Task<ActionResult<UserAccount>> GetUserAccount(int id)
    {
        var userAccount = await _context.UserAccount.FindAsync(id);

        if (userAccount == null)
        {
            return NotFound();
        }

        return userAccount;
    }

    // POST: api/UserAccount
    [HttpPost]
    public async Task<ActionResult<UserAccount>> PostUserAccount(UserAccount userAccount)
    {
        _context.UserAccount.Add(userAccount);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetUserAccount), new { id = userAccount.UserAccountId }, userAccount);
    }

    // PUT: api/UserAccount/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutUserAccount(int id, UserAccount userAccount)
    {
        if (id != userAccount.UserAccountId)
        {
            return BadRequest();
        }

        _context.Entry(userAccount).State = EntityState.Modified;

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

    // DELETE: api/UserAccount/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUserAccount(int id)
    {
        var userAccount = await _context.UserAccount.FindAsync(id);
        if (userAccount == null)
        {
            return NotFound();
        }

        _context.UserAccount.Remove(userAccount);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool UserAccountExists(int id)
    {
        return _context.UserAccount.Any(e => e.UserAccountId == id);
    }
}
