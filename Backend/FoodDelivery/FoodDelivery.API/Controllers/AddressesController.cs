using FoodDelivery.Contacts;
using FoodDelivery.Core.Models;
using FoodDelivery.DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoodDelivery.Controllers;

[ApiController]
[Route("[controller]")]
public class AddressesController : ControllerBase
{
    private readonly FoodDeliveryDbContext _context;
    private readonly ILogger<AddressesController> _logger;
    
    public AddressesController(FoodDeliveryDbContext context, ILogger<AddressesController> logger)
    {
        _context = context;
        _logger = logger;
    }

    [HttpPost("Create")]
    public async Task<IActionResult> CreateAddress(CreateAddressRequest request)
    {
        Address address = new Address(request.City, request.Street, request.House,
            request.Apartment, request.FrontDoor, request.Floor, request.IsHaveIntercom);
        Address? sameAddress = await _context.Addresses.FirstOrDefaultAsync(a => 
            a.City == address.City &&
            a.Street == address.Street &&
            a.House == address.House &&
            a.Apartment == address.Apartment &&
            a.FrontDoor == address.FrontDoor &&
            a.Floor == address.Floor &&
            a.IsHaveIntercom == address.IsHaveIntercom);
        User? user = await _context.Users.FirstOrDefaultAsync(u => u.Id == request.UserId);
        if (user == null)
        {
            return BadRequest("Пользователь не найден");
        }

        Guid id;
        if (sameAddress != null)
        {
            user.Address = sameAddress;
            id = sameAddress.Id;
        }
        else
        {
            await _context.Addresses.AddAsync(address);
            user.Address = address;
            id = address.Id;
        }
        
        await _context.SaveChangesAsync();
        
        return Ok(id);
    }
}