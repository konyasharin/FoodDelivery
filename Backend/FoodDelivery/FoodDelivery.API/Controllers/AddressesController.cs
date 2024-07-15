using FoodDelivery.Contacts;
using FoodDelivery.Core.Models;
using FoodDelivery.DataAccess;
using Microsoft.AspNetCore.Mvc;

namespace FoodDelivery.Controllers;

[ApiController]
[Route("[controller]")]
public class AddressesController : ControllerBase
{
    private readonly FoodDeliveryDbContext _context;
    
    public AddressesController(FoodDeliveryDbContext context)
    {
        _context = context;
    }

    [HttpPost("Create")]
    public async Task<IActionResult> CreateAddress(CreateAddressRequest request)
    {
        Address address = new Address(request.City, request.Street, request.House,
            request.Apartment, request.FrontDoor, request.Floor, request.IsHaveIntercom);
        await _context.Addresses.AddAsync(address);
        await _context.SaveChangesAsync();
        
        return Ok(address.Id);
    }
}