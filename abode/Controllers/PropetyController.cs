using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models;

[ApiController]
[Route("api/[controller]")]
public class PropertyController : ControllerBase
{
    private readonly PropertyDbContext _context;

    public PropertyController(PropertyDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Property>>> GetProperties()
    {
        return await _context.Properties.Include(p => p.Photos).ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Property>> GetProperty(int id)
    {
        var property = await _context.Properties.Include(p => p.Photos)
                                                 .FirstOrDefaultAsync(p => p.PropertyID == id);

        if (property == null)
        {
            return NotFound();
        }

        return property;
    }

    [HttpPost]
    public async Task<ActionResult<Property>> PostProperty(Property property)
    {
        if (property.Photos != null)
        {
            foreach (var photo in property.Photos)
            {
                if (!IsValidPhotoUrl(photo.PhotoURL))
                {
                    return BadRequest($"Invalid photo URL format: {photo.PhotoURL}");
                }
            }
        }

        _context.Properties.Add(property);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetProperty), new { id = property.PropertyID }, property);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutProperty(int id, Property property)
    {
        if (id != property.PropertyID)
        {
            return BadRequest();
        }

        var existingProperty = await _context.Properties.Include(p => p.Photos)
                                                         .FirstOrDefaultAsync(p => p.PropertyID == id);

        if (existingProperty == null)
        {
            return NotFound();
        }

        // Update the property details
        existingProperty.Address = property.Address;
        existingProperty.City = property.City;
        existingProperty.State = property.State;
        existingProperty.ZipCode = property.ZipCode;
        existingProperty.PropertyType = property.PropertyType;
        existingProperty.NumberOfBedrooms = property.NumberOfBedrooms;
        existingProperty.NumberOfBathrooms = property.NumberOfBathrooms;
        existingProperty.SquareFootage = property.SquareFootage;
        existingProperty.YearBuilt = property.YearBuilt;
        existingProperty.PurchaseDate = property.PurchaseDate;
        existingProperty.PurchasePrice = property.PurchasePrice;

        // Update photos (if any)
        if (property.Photos != null)
        {
            // Remove existing photos
            _context.PropertyPhotos.RemoveRange(existingProperty.Photos);

            // Add new photos
            foreach (var photo in property.Photos)
            {
                if (!IsValidPhotoUrl(photo.PhotoURL))
                {
                    return BadRequest($"Invalid photo URL format: {photo.PhotoURL}");
                }

                existingProperty.Photos.Add(new PropertyPhoto
                {
                    PropertyID = id,
                    PhotoURL = photo.PhotoURL
                });
            }
        }

        _context.Entry(existingProperty).State = EntityState.Modified;

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

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProperty(int id)
    {
        var property = await _context.Properties.Include(p => p.Photos)
                                                .FirstOrDefaultAsync(p => p.PropertyID == id);

        if (property == null)
        {
            return NotFound();
        }

        _context.Properties.Remove(property);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpPost("{id}/photos")]
    public async Task<IActionResult> AddPhotos(int id, [FromBody] List<string> photoUrls)
    {
        var property = await _context.Properties.Include(p => p.Photos)
                                                .FirstOrDefaultAsync(p => p.PropertyID == id);

        if (property == null)
        {
            return NotFound();
        }

        foreach (var photoUrl in photoUrls)
        {
            if (!IsValidPhotoUrl(photoUrl))
            {
                return BadRequest($"Invalid photo URL format: {photoUrl}");
            }

            property.Photos.Add(new PropertyPhoto
            {
                PropertyID = id,
                PhotoURL = photoUrl
            });
        }

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}/photos/{photoId}")]
    public async Task<IActionResult> DeletePhoto(int id, int photoId)
    {
        var photo = await _context.PropertyPhotos.FirstOrDefaultAsync(p => p.PhotoID == photoId && p.PropertyID == id);

        if (photo == null)
        {
            return NotFound();
        }

        _context.PropertyPhotos.Remove(photo);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool IsValidPhotoUrl(string url)
    {
        string[] validExtensions = { ".png", ".jpeg", ".jpg" };
        string extension = Path.GetExtension(url).ToLower();
        return validExtensions.Contains(extension);
    }

    private bool PropertyExists(int id)
    {
        return _context.Properties.Any(e => e.PropertyID == id);
    }
}
