using AutoMapper;
using FoodDelivery.Contacts;
using FoodDelivery.Core.Abstractions;
using FoodDelivery.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace FoodDelivery.Controllers;
[ApiController]
[Route("[controller]")]
public class FoodsController : ControllerBase
{
    private readonly IFoodsRepository _repository;
    private readonly IMapper _mapper;

    public FoodsController(IFoodsRepository repository, IMapper mapper)
    {
        _repository = repository;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<List<GetFoodResponse>>> GetFoods()
    {
        List<GetFoodResponse> response = _mapper.Map<List<GetFoodResponse>>(await _repository.Get());
        return Ok(response);
    }

    [HttpPost]
    public async Task<ActionResult<Guid>> CreateFood([FromBody] CreateFoodRequest request)
    {
        Food food = new Food()
        {
            Id = Guid.NewGuid(),
            Name = request.Name,
            Description = request.Description
        };
        
        Guid id = await _repository.Create(food);
        return Ok(id);
    }
}