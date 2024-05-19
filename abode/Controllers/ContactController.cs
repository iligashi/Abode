using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;

[ApiController]
[Route("api/[controller]")]
public class ContactsController : ControllerBase
{
    private readonly ContactDbContext _context;

    public ContactsController(ContactDbContext context)
    {
        _context = context;
    }

    // GET: api/COntacts
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Contact>>> GetContact()
    {
        return await _context.Contacts.ToListAsync();
    }

    // GET: api/Contacts/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Contact>> GetContact(int id)
    {
        var contact = await _context.Contacts.FindAsync(id);

        if (contact == null)
        {
            return NotFound();
        }

        return contact;
    }

    // POST: api/Contacts
    [HttpPost]
    public async Task<ActionResult<Contact>> PostUser(Contact contact)
    {
        _context.Contacts.Add(contact);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetContact), new { id = contact.ContactID }, contact);
    }

    // PUT: api/Contacts/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutCotact(int id, Contact contact)
    {
        if (id != contact.ContactID)
        {
            return BadRequest();
        }

        _context.Entry(contact).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ContactExists(id))
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

    // DELETE: api/Contacts/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteContact(int id)
    {
        var contact = await _context.Contacts.FindAsync(id);
        if (contact == null)
        {
            return NotFound();
        }

        _context.Contacts.Remove(contact);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool ContactExists(int id)
    {
        return _context.Contacts.Any(e => e.ContactID == id);
    }
}
