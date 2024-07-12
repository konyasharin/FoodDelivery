using FoodDelivery.Core.Abstractions;
using FoodDelivery.Core.Models;

namespace FoodDelivery.DataAccess.Repositories;

public class UsersRepository : IUsersRepository
{
    private readonly FoodDeliveryDbContext _context;
    
    public UsersRepository(FoodDeliveryDbContext context)
    {
        _context = context;
    }

    public async Task<Guid> Create(User user)
    {
        await _context.Users.AddAsync(user);
        await _context.SaveChangesAsync();

        return user.Id;
    }
}