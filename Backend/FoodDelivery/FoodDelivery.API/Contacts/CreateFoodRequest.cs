using System.ComponentModel.DataAnnotations;

namespace FoodDelivery.Contacts;

public class CreateFoodRequest
{
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}