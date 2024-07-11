using FoodDelivery.Contacts;
using FoodDelivery.Core.Abstractions;
using FoodDelivery.Core.Models;
using FoodDelivery.DataAccess.Entities;
using Microsoft.AspNetCore.Mvc;

namespace FoodDelivery.Controllers;
[ApiController]
[Route("[controller]")]
public class FoodsController : ControllerBase
{
    private readonly IFoodsRepository _repository;

    public FoodsController(IFoodsRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public async Task<ActionResult<List<Food>>> GetFoods()
    {
        List<Food> response = await _repository.Get();
        return Ok(response);
    }

    [HttpPost]
    public async Task<ActionResult<Guid>> CreateFood([FromBody] CreateFoodRequest request)
    {
        var (food, error) = Food.Create(Guid.NewGuid(), request.Name, request.Description);
        if (!string.IsNullOrEmpty(error))
        {
            return BadRequest(error);
        }
        Guid id = await _repository.Create(food);
        return Ok(id);
    }
}