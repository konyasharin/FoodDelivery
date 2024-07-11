namespace FoodDelivery.Core.Models;

public class Food
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }

    private Food(Guid id, string name, string description)
    {
        Id = id;
        Name = name;
        Description = description;
    }

    public static (Food food, string error) Create(Guid id, string name, string description)
    {
        Food food = new Food(id, name, description);
        return (food, "");
    }
}