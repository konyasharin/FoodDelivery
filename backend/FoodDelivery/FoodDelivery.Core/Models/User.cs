namespace FoodDelivery.Core.Models;

public class User(string userName, string password)
{
    public Guid Id { get; set; }
    public string UserName { get; set; } = userName;
    public string Password { get; set; } = password;
    public Address? Address { get; set; }
    public List<Order> Orders { get; set; } = [];
}