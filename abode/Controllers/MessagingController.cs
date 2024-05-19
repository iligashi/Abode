using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;

[ApiController]
[Route("api/[controller]")]
public class MessagingController : ControllerBase
{
    private readonly MessagingDbContext _context;

    public MessagingController(MessagingDbContext context)
    {
        _context = context;
    }

    // GET: api/Todo/Messages
    [HttpGet("Messages")]
    public async Task<ActionResult<IEnumerable<Messaging>>> GetMessages()
    {
        return await _context.Messages.ToListAsync();
    }

    // GET: api/Todo/Messages/
    [HttpGet("Messages/{id}")]
    public async Task<ActionResult<Messaging>> GetMessage(int id)
    {
        var message = await _context.Messages.FindAsync(id);

        if (message == null)
        {
            return NotFound();
        }

        return message;
    }

    // POST: api/Todo/Messages
    [HttpPost("Messages")]
    public async Task<ActionResult<Messaging>> PostMessage(Messaging message)
    {
        _context.Messages.Add(message);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetMessage), new { id = message.MessageID }, message);
    }

    // PUT: api/Todo/Messages/5
    [HttpPut("Messages/{id}")]
    public async Task<IActionResult> PutMessage(int id, Messaging message)
    {
        if (id != message.MessageID)
        {
            return BadRequest();
        }

        _context.Entry(message).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!MessageExists(id))
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

    // DELETE: api/Todo/Messages/5
    [HttpDelete("Messages/{id}")]
    public async Task<IActionResult> DeleteMessage(int id)
    {
        var message = await _context.Messages.FindAsync(id);
        if (message == null)
        {
            return NotFound();
        }

        _context.Messages.Remove(message);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool MessageExists(int id)
    {
        return _context.Messages.Any(e => e.MessageID == id);
    }
}
