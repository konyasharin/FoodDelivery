FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["FoodDelivery.API/FoodDelivery.API.csproj", "FoodDelivery.API/"]
COPY ["FoodDelivery.DataAccess/FoodDelivery.DataAccess.csproj", "FoodDelivery.DataAccess/"]
COPY ["FoodDelivery.Core/FoodDelivery.Core.csproj", "FoodDelivery.Core/"]
RUN dotnet restore "FoodDelivery.API/FoodDelivery.API.csproj"
COPY . .
WORKDIR "/src/FoodDelivery.API"
RUN dotnet build "FoodDelivery.API.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "FoodDelivery.API.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "FoodDelivery.API.dll"]
