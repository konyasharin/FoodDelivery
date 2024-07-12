using FoodDelivery.Core.Abstractions;
using Microsoft.AspNetCore.Mvc;

namespace FoodDelivery.Controllers;

public class UsersController : ControllerBase
{
    private readonly IUsersRepository _repository;
    
    public UsersController(IUsersRepository repository)
    {
        _repository = repository;
    }

    // [HttpPost]
    // public async Task<ActionResult<Guid>> CreateUser()
    // {
    //     
    // }
}