using FoodDelivery.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace FoodDelivery.DataAccess;

public class FoodStoreDbContext : DbContext
{
    public DbSet<FoodEntity> Foods { get; set; }
    
    public FoodStoreDbContext(DbContextOptions<FoodStoreDbContext> options) : base(options)
    {
        
    }
}