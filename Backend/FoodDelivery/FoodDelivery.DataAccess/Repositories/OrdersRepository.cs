using FoodDelivery.Core.Abstractions;
using FoodDelivery.Core.Models;

namespace FoodDelivery.DataAccess.Repositories;

public class OrdersRepository : IOrdersRepository
{
    private readonly FoodDeliveryDbContext _context;
    
    public OrdersRepository(FoodDeliveryDbContext context)
    {
        _context = context;
    }

    public async Task<Guid> Create(Order order)
    {
        await _context.AddAsync(order);
        await _context.SaveChangesAsync();

        return order.Id;
    }
}