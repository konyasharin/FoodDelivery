using FoodDelivery.Core.Abstractions;
using FoodDelivery.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace FoodDelivery.DataAccess.Repositories;

public class FoodsRepository(FoodDeliveryDbContext context) : IFoodsRepository
{
    public async Task<List<Food>> Get()
    {
        List<Food> foods = await context.Foods
            .AsNoTracking()
            .ToListAsync();
        
        return foods;
    }

    public async Task<Guid> Create(Food food)
    {
        await context.Foods.AddAsync(food);
        await context.SaveChangesAsync();

        return food.Id;
    }
}