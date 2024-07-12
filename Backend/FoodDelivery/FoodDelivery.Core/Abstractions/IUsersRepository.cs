using FoodDelivery.Core.Models;

namespace FoodDelivery.Core.Abstractions;

public interface IUsersRepository
{
    Task<Guid> Create(User user);
}