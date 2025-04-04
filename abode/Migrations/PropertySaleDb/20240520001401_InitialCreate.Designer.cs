﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WorkingwithSQLLiteinAsp.NETCoreWebAPI.ApplicationDbContext;

#nullable disable

namespace WorkingwithSQLLiteinAsp.NETCoreWebAPI.Migrations.PropertySaleDb
{
    [DbContext(typeof(PropertySaleDbContext))]
    [Migration("20240520001401_InitialCreate")]
    partial class InitialCreate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.15");

            modelBuilder.Entity("WorkingwithSQLLiteinAsp.NETCoreWebAPI.Models.PropertySale", b =>
                {
                    b.Property<int>("SaleID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("BuyerID")
                        .HasColumnType("INTEGER");

                    b.Property<int>("PropertyID")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("SalePrice")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("SaletDate")
                        .HasColumnType("TEXT");

                    b.Property<int>("SellerID")
                        .HasColumnType("INTEGER");

                    b.HasKey("SaleID");

                    b.ToTable("Sale");
                });
#pragma warning restore 612, 618
        }
    }
}
