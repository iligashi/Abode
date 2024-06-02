﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.Migrations.PropertyDb
{
    [DbContext(typeof(PropertyDbContext))]
    partial class PropertyDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.15");

            modelBuilder.Entity("Property", b =>
                {
                    b.Property<int>("PropertyID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("NumberOfBathrooms")
                        .HasColumnType("INTEGER");

                    b.Property<int>("NumberOfBedrooms")
                        .HasColumnType("INTEGER");

                    b.Property<string>("PropertyType")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("PurchaseDate")
                        .HasColumnType("TEXT");

                    b.Property<decimal?>("PurchasePrice")
                        .HasColumnType("TEXT");

                    b.Property<decimal>("SquareFootage")
                        .HasColumnType("TEXT");

                    b.Property<string>("State")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("YearBuilt")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ZipCode")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("PropertyID");

                    b.ToTable("Properties");
                });

            modelBuilder.Entity("PropertyPhoto", b =>
                {
                    b.Property<int>("PhotoID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("PhotoURL")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("PropertyID")
                        .HasColumnType("INTEGER");

                    b.HasKey("PhotoID");

                    b.HasIndex("PropertyID");

                    b.ToTable("PropertyPhotos");
                });

            modelBuilder.Entity("PropertyPhoto", b =>
                {
                    b.HasOne("Property", "Property")
                        .WithMany("Photos")
                        .HasForeignKey("PropertyID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Property");
                });

            modelBuilder.Entity("Property", b =>
                {
                    b.Navigation("Photos");
                });
#pragma warning restore 612, 618
        }
    }
}
