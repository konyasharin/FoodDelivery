using FoodDelivery.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FoodDelivery.DataAccess.Configurations;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasKey(user => user.Id);
        builder
            .HasMany(u => u.Orders)
            .WithOne(o => o.User);
        builder
            .HasOne(u => u.Address)
            .WithOne();
        builder.HasIndex(u => u.UserName).IsUnique();
        builder.Property(u => u.UserName)
            .HasMaxLength(32)
            .IsRequired();
        builder.Property(u => u.Password).IsRequired();
    }
}