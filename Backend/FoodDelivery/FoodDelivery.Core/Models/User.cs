namespace FoodDelivery.Core.Models;

public class User
{
    public Guid Id { get; set; }
    public string UserName { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public required Address Address { get; set; }
    public List<Order> Orders { get; set; } = [];
}