using FoodDelivery.Contacts;
using FoodDelivery.Core.Models;
using FoodDelivery.DataAccess;
using Microsoft.AspNetCore.Mvc;

namespace FoodDelivery.Controllers;

[ApiController]
[Route("[controller]")]
public class UsersController : ControllerBase
{
    private readonly FoodDeliveryDbContext _context;
    
    public UsersController(FoodDeliveryDbContext context)
    {
        _context = context;
    }

    [HttpPost("Create")]
    public async Task<ActionResult> CreateUser([FromBody] CreateUserRequest request)
    {
        User user = new User(request.UserName, request.Password);
        await _context.Users.AddAsync(user);
        await _context.SaveChangesAsync();

        return Ok(user.Id);
    }
}