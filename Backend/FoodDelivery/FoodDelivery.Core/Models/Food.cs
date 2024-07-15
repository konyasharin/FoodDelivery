namespace FoodDelivery.Core.Models;

public class Food(string name, string description)
{
    public Guid Id { get; init; }
    public string Name { get; set; } = name;
    public string Description { get; set; } = description;
}