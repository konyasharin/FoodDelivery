using FoodDelivery.Core.Models;

namespace FoodDelivery.Contacts.User;

public class CreateUserRequest
{
    public string UserName { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public required Address Address { get; set; }
    public List<Order> Orders { get; set; } = [];
}