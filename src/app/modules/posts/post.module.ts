import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule, Actions } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { postReducer } from './state/post.reducer';
import { PostEffect } from './state/post.effects';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { PostsComponent } from './posts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEditPostsComponent } from './add-edit-posts/add-edit-posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
@NgModule({
  declarations: [ListPostsComponent, PostsComponent, AddEditPostsComponent, PostDetailComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature('posts', postReducer),
    EffectsModule.forFeature([PostEffect]),
    NgbModule
  ],
})
export class PostModule { }
