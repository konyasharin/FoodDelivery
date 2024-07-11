using FoodDelivery.Core.Abstractions;
using FoodDelivery.Core.Models;
using FoodDelivery.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace FoodDelivery.DataAccess.Repositories;

public class FoodsRepository(FoodStoreDbContext context) : IFoodsRepository
{
    public async Task<List<Food>> Get()
    {
        List<FoodEntity> foodEntities = await context.Foods
            .AsNoTracking()
            .ToListAsync();
        List<Food> foods = foodEntities.Select(e => Food.Create(e.Id, e.Name, e.Description).food).ToList();
        
        return foods;
    }

    public async Task<Guid> Create(Food food)
    {
        FoodEntity foodEntity = new FoodEntity()
        {
            Id = food.Id,
            Name = food.Name,
            Description = food.Description
        };

        await context.Foods.AddAsync(foodEntity);
        await context.SaveChangesAsync();

        return foodEntity.Id;
    }
}