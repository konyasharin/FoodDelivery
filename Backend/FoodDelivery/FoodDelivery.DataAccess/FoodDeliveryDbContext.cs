using FoodDelivery.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace FoodDelivery.DataAccess;

public class FoodDeliveryDbContext : DbContext
{
    public DbSet<Food> Foods { get; set; }
    
    public FoodDeliveryDbContext(DbContextOptions<FoodDeliveryDbContext> options) : base(options)
    {
        
    }
}