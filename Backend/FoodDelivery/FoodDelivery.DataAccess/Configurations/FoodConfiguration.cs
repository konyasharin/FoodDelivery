using FoodDelivery.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FoodDelivery.DataAccess.Configurations;

public class FoodConfiguration : IEntityTypeConfiguration<FoodEntity>
{
    public void Configure(EntityTypeBuilder<FoodEntity> builder)
    {
        builder.HasKey(entity => entity.Id);
        builder.Property(entity => entity.Name).IsRequired();
    }
}