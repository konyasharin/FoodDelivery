using FoodDelivery.Core.Models;

namespace FoodDelivery.Core.Abstractions;

public interface IFoodsRepository
{
    Task<List<Food>> Get();
    Task<Guid> Create(Food food);
}