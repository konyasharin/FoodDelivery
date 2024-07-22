using FoodDelivery.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FoodDelivery.DataAccess.Configurations;

public class FoodConfiguration : IEntityTypeConfiguration<Food>
{
    public void Configure(EntityTypeBuilder<Food> builder)
    {
        builder.HasKey(f => f.Id);
        builder.Property(f => f.Name)
            .IsRequired()
            .HasMaxLength(16);
        builder.HasIndex(f => f.Name).IsUnique();
        builder.Property(f => f.Description)
            .HasMaxLength(256);
    }
}