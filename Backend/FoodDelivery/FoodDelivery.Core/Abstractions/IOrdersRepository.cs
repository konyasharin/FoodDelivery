using FoodDelivery.Core.Models;

namespace FoodDelivery.Core.Abstractions;

public interface IOrdersRepository
{
    Task<Guid> Create(Order order);
}