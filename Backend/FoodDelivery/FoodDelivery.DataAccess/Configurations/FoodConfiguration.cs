using FoodDelivery.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FoodDelivery.DataAccess.Configurations;

public class FoodConfiguration : IEntityTypeConfiguration<Food>
{
    public void Configure(EntityTypeBuilder<Food> builder)
    {
        builder.HasKey(food => food.Id);
        builder.Property(food => food.Name)
            .IsRequired()
            .HasMaxLength(16);
        builder.HasIndex(food => food.Name).IsUnique();
        builder.Property(food => food.Description)
            .HasMaxLength(256);
    }
}