using AutoMapper;
using FoodDelivery.Contacts;
using FoodDelivery.Core.Models;

namespace FoodDelivery;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<Food, GetFoodResponse>();
    }
}