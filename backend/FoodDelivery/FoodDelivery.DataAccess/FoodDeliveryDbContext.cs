using FoodDelivery.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace FoodDelivery.DataAccess;

public class FoodDeliveryDbContext : DbContext
{
    public DbSet<Food> Foods { get; set; } 
    public DbSet<Order> Orders { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Address> Addresses { get; set; }
    
    public FoodDeliveryDbContext(DbContextOptions<FoodDeliveryDbContext> options) : base(options)
    {
        
    }
}