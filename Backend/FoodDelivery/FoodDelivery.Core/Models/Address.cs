namespace FoodDelivery.Core.Models;

public class Address(string city, string street, string house, string apartment,
    int frontDoor, int floor, bool isHaveIntercom)
{
    public Guid Id { get; init; }
    public string City { get; init; } = city;
    public string Street { get; init; } = street;
    public string House { get; init; } = house;
    public string Apartment { get; init; } = apartment;
    public int FrontDoor { get; init; } = frontDoor;
    public int Floor { get; init; } = floor;
    public bool IsHaveIntercom { get; init; } = isHaveIntercom;
}