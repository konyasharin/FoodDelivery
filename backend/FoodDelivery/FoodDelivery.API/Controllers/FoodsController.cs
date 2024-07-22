using FoodDelivery.Contacts;
using FoodDelivery.Core.Models;
using FoodDelivery.DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoodDelivery.Controllers;
[ApiController]
[Route("[controller]")]
public class FoodsController : ControllerBase
{
    private readonly FoodDeliveryDbContext _context;

    public FoodsController(FoodDeliveryDbContext context)
    {
        _context = context;
    }

    [HttpGet("GetAll")]
    public async Task<ActionResult> GetFoods()
    {
        List<Food> foods = await _context.Foods
            .AsNoTracking()
            .ToListAsync(); 
        List<FoodDto> response = foods.Select(f => new FoodDto(f.Id, f.Name, f.Description)).ToList();
        return Ok(new GetFoodsResponse(response));
    }

    [HttpPost("Create")]
    public async Task<ActionResult> CreateFood([FromBody] CreateFoodRequest request)
    {
        Food food = new Food(request.Name, request.Description);
        await _context.Foods.AddAsync(food);
        await _context.SaveChangesAsync();
        return Ok(food.Id);
    }

    [HttpPut("Update/{id:guid}")]
    public async Task<ActionResult> UpdateFood(Guid id, [FromBody] UpdateFoodRequest request)
    {
        Food? food = await _context.Foods.FirstOrDefaultAsync(f => f.Id == id);
        if (food is null)
        {
            return BadRequest("Продукт не найден");
        }

        food.Name = request.Name;
        food.Description = request.Description;
        await _context.SaveChangesAsync();
        
        return Ok(id);
    }

    [HttpDelete("Delete/{id:guid}")]
    public async Task<ActionResult> DeleteFood(Guid id)
    {
        await _context.Foods
            .Where(f => f.Id == id)
            .ExecuteDeleteAsync();

        return Ok(id);
    }
}