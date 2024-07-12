using FoodDelivery.Core.Abstractions;
using FoodDelivery.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace FoodDelivery.DataAccess.Repositories;

public class FoodsRepository : IFoodsRepository
{
    private readonly FoodDeliveryDbContext _context;
    
    public FoodsRepository(FoodDeliveryDbContext context)
    {
        _context = context;
    }
    
    public async Task<List<Food>> Get()
    {
        List<Food> foods = await _context.Foods
            .AsNoTracking()
            .ToListAsync();
        
        return foods;
    }

    public async Task<Guid> Create(Food food)
    {
        await _context.Foods.AddAsync(food);
        await _context.SaveChangesAsync();

        return food.Id;
    }

    public async Task<Guid> Update(Food newFood)
    {
        await _context.Foods
            .Where(f => f.Id == newFood.Id)
            .ExecuteUpdateAsync(s => s
                .SetProperty(f => f.Name, newFood.Name)
                .SetProperty(f => f.Description, newFood.Description));
        
        return newFood.Id;
    }

    public async Task<Guid> Delete(Guid id)
    {
        await _context.Foods
            .Where(f => f.Id == id)
            .ExecuteDeleteAsync();
        
        return id;
    }
}