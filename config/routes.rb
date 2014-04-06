PlayMe::Application.routes.draw do
  root 'tones#index'

  resources :tones
end
