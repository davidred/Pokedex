class Api::PokemonController < ApplicationController

  def show
    @pokemon = Pokemon.find(params[:id])
    render json: @pokemon
  end

  def index
    @pokemon = Pokemon.all
    render json: @pokemon
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name)
  end
end
