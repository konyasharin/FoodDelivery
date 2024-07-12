using FoodDelivery.Core.Models;

namespace FoodDelivery.Core.Abstractions;

public interface IFoodsRepository
{
    Task<List<Food>> Get();
    Task<Guid> Create(Food food);
    Task<Guid> Update(Food food);
    Task<Guid> Delete(Guid id);
}