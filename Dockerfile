ARG RUBY_VERSION
FROM ruby:$RUBY_VERSION

RUN apt-get update -qq -y

#  RUN apt-get install -y postgresql-client
RUN apt-get install -y default-mysql-client

ARG NODE_MAJOR
ARG BUNDLE_VERSION

RUN curl -sL https://deb.nodesource.com/setup_$NODE_MAJOR.x | bash -
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update -qq

RUN apt-get install -y nodejs yarn

RUN gem install bundler -v $BUNDLE_VERSION
COPY Gemfile Gemfile.lock ./
RUN bundle install -j $(nproc)

RUN mkdir -p /app
WORKDIR /app