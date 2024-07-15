using FoodDelivery.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FoodDelivery.DataAccess.Configurations;

public class AddressConfiguration : IEntityTypeConfiguration<Address>
{
    public void Configure(EntityTypeBuilder<Address> builder)
    {
        builder.HasKey(a => a.Id);
        builder.Property(a => a.City)
            .IsRequired()
            .HasMaxLength(50);
        builder.Property(a => a.Street)
            .IsRequired()
            .HasMaxLength(100);
        builder.Property(a => a.House)
            .IsRequired()
            .HasMaxLength(20);
    }
}