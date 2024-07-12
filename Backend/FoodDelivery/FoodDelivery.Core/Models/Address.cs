namespace FoodDelivery.Core.Models;

public class Address
{
    public string City { get; set; } = string.Empty;
    public string Street { get; set; } = string.Empty;
    public string House { get; set; } = string.Empty;
    public string Apartment { get; set; } = string.Empty;
    public int FrontDoor { get; set; }
    public int Floor { get; set; }
    public bool IsHaveIntercom { get; set; }
}