namespace FoodDelivery.Core.Models;

public class Order
{
    public Guid Id { get; set; }
    public required User User { get; set; }
    public OrderStatus Status { get; set; } = OrderStatus.Accepted;
    public float Price { get; set; }
}